const contacts = [];

exports.getProfile = (req, res) => {
  res.json({
    name: "Shakhboz Soliev",
    title: "Web Developer",
    summary: "Express Portfolio API"
  });
};

exports.getAbout = (req, res) => {
  res.json({
    about: "About me text",
    skills: ["JavaScript", "Node.js", "Express"]
  });
};

exports.getProjects = (req, res) => {
  res.json([
    { id: 1, name: "Project One", description: "Demo project" },
    { id: 2, name: "Project Two", description: "Demo project" }
  ]);
};

exports.postContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  contacts.push({ name, email, message });
  res.status(201).json({ success: true });
};
