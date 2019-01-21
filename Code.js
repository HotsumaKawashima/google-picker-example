function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function getOAuthToken() {
  // 一度は､ DriveApp の関数の呼び出しを行うが必要がある
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}
