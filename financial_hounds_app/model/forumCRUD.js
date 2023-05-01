const forumModel = require("./forum");

async function createForum(newForum){
    forum = new forumModel(newForum);
    await forum.save()
    return forum;
  }

async function updateStudents(forumYear, newStudents){
    filter = {year: forumYear};
    update =  {students: newStudents};
    //returns doc before it was updated
    forum = await forumModel.findOneAndUpdate(filter, update);
    forumUpdated = await forumModel.findOne(filter);
    return forumUpdated; 
}

async function updateComments(forumYear, newComments){
    filter = {year: forumYear};
    update =  {comments: newComments};
    //returns doc before it was updated
    forum = await forumModel.findOneAndUpdate(filter, update);
    forumUpdated = await forumModel.findOne(filter);
    return forumUpdated; 
}


module.exports = {createForum, updateStudents, updateComments}