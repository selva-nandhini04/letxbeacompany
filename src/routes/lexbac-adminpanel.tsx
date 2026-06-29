import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getContactsFn } from "../serverFns";

export const Route = createFileRoute("/lexbac-adminpanel")({
  component: AdminPanel,
});

function AdminPanel() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_password");
    if (savedPassword) {
      handleLogin(savedPassword);
    }
  }, []);

  const handleLogin = async (pass: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await getContactsFn({ data: pass });
      setContacts(data);
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_password", pass);
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
      sessionStorage.removeItem("admin_password");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== "letxbeacompany") {
      setError("Invalid credentials");
      return;
    }
    handleLogin(password);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_password");
    setIsAuthenticated(false);
    setContacts([]);
    setPassword("");
    setUsername("");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <form onSubmit={onSubmit} className="glass-card w-full max-w-sm rounded-3xl p-8 space-y-6">
          <div className="text-center">
            <h1 className="font-display text-2xl">Admin Login</h1>
          </div>
          {error && <div className="text-destructive text-sm text-center">{error}</div>}
          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-4xl">Submissions</h1>
          <button
            onClick={handleLogout}
            className="rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-accent"
          >
            Logout
          </button>
        </div>

        <div className="glass-card overflow-hidden rounded-3xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No submissions yet.
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact) => (
                    <tr key={contact.id} className="transition-colors hover:bg-muted/30">
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 font-medium">{contact.name}</td>
                      <td className="px-6 py-4">{contact.email}</td>
                      <td className="px-6 py-4">{contact.type}</td>
                      <td className="px-6 py-4">{contact.budget}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
