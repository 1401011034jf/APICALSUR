export function validate(id, res) {
  if (/^\d+$/.test(id)) {
    res.send("Sí es número")
  } else {
    res.status(400).send("No es número")
  }
}