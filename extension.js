// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "copypath" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('copypath.helloWorld', function () {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    // vscode.window.showInformationMessage('Hello World from CopyPath!');
    // 这里的这个函数我就可以使用来创建我自己的工具函数了
    if (vscode.workspace.workspaceFolders !== undefined) {
      let curFolderPath = vscode.workspace.workspaceFolders[0].uri.path;
      let curFilePath = vscode.window.activeTextEditor.document.uri.path;
      let myPath = curFilePath.slice(curFolderPath.length, curFilePath.length);
      myPath = "." + myPath;
      // console.log(typeof curFolderPath);
      // console.log(curFolderPath);
      // console.log(curFilePath);
      // console.log(myPath);
      vscode.env.clipboard.writeText(myPath); // 操作剪贴板
    }
    else {
      console.log("not find workspace folder!");
    }

  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate
}
