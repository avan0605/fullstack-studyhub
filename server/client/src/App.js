import { useEffect, useState } from "react";

function App() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("/api/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data));
  }, []);

  return (
    <div>
      <h1>Study Sessions</h1>
      {sessions.map((s, i) => (
        <p key={i}>{s.subject} - {s.hours} hrs</p>
      ))}
    </div>
  );
}

export default App;
