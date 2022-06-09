const html = `
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
  <tr>
    <td>git config --global user.name “[firstname lastname]”</td>
    <td>set a name that is identiﬁable for credit when review version history</td>
  </tr>
  <tr>
    <td>git config --global user.email “[valid-email]”</td>
    <td>set an email address that will be associated with each history marker</td>
  </tr>
  <tr>
    <td>git config --global color.ui auto</td>
    <td>set automatic command line coloring for Git for easy reviewing</td>
  </tr>
  <tr>
    <td>git diff</td>
    <td>diﬀ of what is changed but not staged</td>
  </tr>
  <tr>
    <td>git diff --staged</td>
    <td>diﬀ of what is staged but not yet committed</td>
  </tr>
  <tr>
    <td>git log branchB..branchA</td>
    <td>show the commits on branchA that are not on branchB</td>
  </tr>
  <tr>
    <td>git diff branchB...branchA</td>
    <td>show the diﬀ of what is in branchA that is not in branchB</td>
  </tr>
  <tr>
    <td>git show [SHA]</td>
    <td>show any object in Git in human-readable format</td>
  </tr>
    <tr>
    <td>git rebase [branch]</td>
    <td>apply any commits of current branch ahead of speciﬁed one</td>
  </tr>
    <tr>
    <td>git reset --hard [commit]</td>
    <td>clear staging area, rewrite working tree from speciﬁed commit</td>
  </tr>
    </tr>
   <tr>
    <td>git clean -fxd</td>
    <td>delete untracked files, directories and untracked . gitignore files</td>
  </tr>
</table>
  
`

const METHODS = {
    'CSGit': {
        func: function (text) {
            return html;
        }, usage: "Cheat sheet about Git"
    },
};

export {
    METHODS
}