const initialText = `# Welcome to my React Markdown Previewer!

## This website uses React to change the website to your markdown text
##### The more # you input, the smaller your title gets

#### Here are some other things you can do!

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://images.squarespace-cdn.com/content/v1/5c79f26a840b1629e748adb7/1593504676346-IF8WPYC7L2LLKCSUZP7C/DSC07122.jpg)
_Angelus Hut, Nelson Lakes National Park, New Zealand_
 `

export default initialText