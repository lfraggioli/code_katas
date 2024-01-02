function printerError(s) {
  const errors = s.match(/[^a-mA-M]/g);
  return (errors?.length || 0) + "/" + s.length;
}
