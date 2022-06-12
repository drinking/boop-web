const mustache = require('mustache');
const json =
    {
        "list": [
            {
                "command": "git config --global user.name “[firstname lastname]”",
                "explain": "set a name that is identiﬁable for credit when review version history"
            },
            {
                "command": "git config --global user.email “[valid-email]”",
                "explain": "set an email address that will be associated with each history marker"
            },
            {
                "command": "git config --global color.ui auto",
                "explain": "set automatic command line coloring for Git for easy reviewing"
            },
            {
                "command": "git diff",
                "explain": "diﬀ of what is changed but not staged"
            },
            {
                "command": "git diff --staged",
                "explain": "diﬀ of what is staged but not yet committed"
            },
            {
                "command": "git log branchB..branchA",
                "explain": "show the commits on branchA that are not on branchB"
            },
            {
                "command": "git diff branchB...branchA",
                "explain": "show the diﬀ of what is in branchA that is not in branchB"
            },
            {
                "command": "git show [SHA]",
                "explain": "show any object in Git in human-readable format"
            }, {
                "command": "git rebase [branch]",
                "explain": "apply any commits of current branch ahead of speciﬁed one"
            },
            {
                "command": "git reset --hard [commit]",
                "explain": "clear staging area, rewrite working tree from speciﬁed commit"
            },
            {
                "command": "git clean -fxd",
                "explain": "delete untracked files, directories and untracked . gitignore files"
            }
        ]

    };

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

const METHODS = {
    'Git Cheat Sheet': {
        func: function (text) {
            const result = mustache.render(template, json);
            console.log(result);
            return result;
        }, usage: "Cheat sheet about Git"
    },
};

export {
    METHODS
}