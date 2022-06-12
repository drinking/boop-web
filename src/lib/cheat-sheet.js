const mustache = require('mustache');
const gitCommands = [
    "git config --global user.name “[firstname lastname]”",
    "set a name that is identiﬁable for credit when review version history",
    "git config --global user.email “[valid-email]”",
    "set an email address that will be associated with each history marker",
    "git config --global color.ui auto",
    "set automatic command line coloring for Git for easy reviewing",
    "git diff",
    "diﬀ of what is changed but not staged",
    "git diff --staged",
    "diﬀ of what is staged but not yet committed",
    "git log branchB..branchA",
    "show the commits on branchA that are not on branchB",
    "git diff branchB...branchA",
    "show the diﬀ of what is in branchA that is not in branchB",
    "git show [SHA]",
    "show any object in Git in human-readable format",
    "git rebase [branch]",
    "apply any commits of current branch ahead of speciﬁed one",
    "git reset --hard [commit]",
    "clear staging area, rewrite working tree from speciﬁed commit",
    "git clean -fxd",
    "delete untracked files, directories and untracked . gitignore files"
]

const template = `
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: black;
  background: white;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<table>
  <tr>
    <th>Command</th>
    <th>Explain</th>
  </tr>
  {{#list}}
    <tr>
        <td>{{command}}</td>
        <td>{{explain}}</td>
    </tr>
  {{/list}}
</table>
  
`

function buildData(commands) {
    let list = [];
    for (let i = 0; i < commands.length; i++) {
        list.push({
            "command": commands[i],
            "explain": commands[i + 1]
        })
        i++
    }
    return {"list": list};
}

const METHODS = {
    'Git Cheat Sheet': {
        func: function (text) {
            return mustache.render(template, buildData(gitCommands));
        }, usage: "Cheat sheet about Git"
    },
};

export {
    METHODS
}