"use client";
import { useState } from "react"

// export default function Dashboard() {
//     const [authorized, setAuthorized] = useState(false);
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         // Handle login logic here
//         const us =process.env.APP_ADMIN_NAME
//         const ps =process.env.APP_ADMIN_PASSWORD
//         console.log('Email:', us );
//         console.log('Password:', ps);
//         if(email === us && password === ps)
//             setAuthorized(true);
//         else
//             alert("Invalid credentials");
//       };

//     if (!authorized)
//         return (
//             <div id="loginform" className="flex justify-center p-10 gap-5">
//                 <div>
//                     <input
//                         id="username"
//                         placeholder="username"
//                         className="border"
//                         type="text"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         id="password"
//                         placeholder="password"
//                         className="border"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit"onClick={handleSubmit}>Login</button>
//             </div>
//         );
//     else
//         return (
//             <div>
//                 <h1>authorized</h1>
//             </div>
//         );
// }
const AdminPage = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")
    const [error, setError] = useState("");
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password , username })
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Redirect to the admin dashboard or show admin content
        window.location.href = "/admin-dashboard";
      } else {
        setError(data.message);
        alert("error logging in")
      }
    };
  
    return (
      <div>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };
  
  export default AdminPage;