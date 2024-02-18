console.log(`I' m config.js page`);
console.log("version 1");

// commit in  git consider as version , or history

/**
  ---- @initializing_git
  git -- init
  ---- @configure_user_account
  git config --global user.name "your name"
  git config --global user.email 'youremail.example.com'

  @check_status
  git status   -----> show the all untrack file

  @add_to_stagin_area
  git add index.js  ----> add singal page
  git add src ----> add singal folder
  git add all----> add everything

  @create_a_history_or_version
  git commit -m "some description between quoates"

 @edit_a_version_without_creating_new_version
 git add .
 git commit -m "edited" --amend

 @check_version
 git log

 @Back_from_statgin_ares
 git reset index.js  ----> reset singal page
  git reset src ----> reset singal folder
  git reset all----> add everything


  we can use git checkout -- <filename> , but this not a good way from exits stagin area

 @git checkout -- <some file>
 when use this command we need to very carefull becasue it change everything from current to previous.
 even stage or other, it affecto code, reset command is best for remove file from staging area.

@naviagte_previous_version
git checkout <commit hash>

@check_branching_effect
git log --all --graph
 */
