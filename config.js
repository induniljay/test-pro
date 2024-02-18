console.log(`I' m config.js page`);
console.log("version 6");
console.log("changes done by another account");

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

@get_previous_branch_content_to_current_branch
git checkout <prev commit hash> <files>

@change_commnad
git config --global alias.s "status"

@remove_git_from_project
rm -rf .git
 */

/**part -2  connect local and remote repos

@connect_local_and_remote_repo
git remote <repo nickname>  <remote repo https link>
ex: git remote add origin https://github.com/induniljay/test-pro.git

git remote --> give list of remote repos , currently link with local project


@unlink_connection
git remote remove <remote repo name>  
ex : git remote remove <origin> 



@push
step-1: set credential
git config --global credential.username "<git username>"
git config --global credential.username "induniljay"

step-2:
git push <remote repo> <local branch name>
git push origin main

@push_shorthand
git push origin main --set-upstream
//then it will remember the origin and main we can simply interatc with git push command only.

//we know we can edit already commited history in local
 but we sync with github, it branching happening, then we try to add github it, it will throw error 
 reason for that by default github doesn't allow this beheviour, but we can override it
 git push origin main -f


 @clone  (download github project to desktop)
 git clone
 git clone https://github.com/induniljay/test-pro.git <copy-of-test>


 @fetch
 assume same pproject we did some modification from downloading clone not the old project,
 now old project is behind the new commint.
 we need to sync again
 for that we use

 git fetch

 now our local repo is behind remote repo
 we need to sync
 for that

@sync
 git pull origin main
 */
