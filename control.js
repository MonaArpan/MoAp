
function readData()
{
	var qid=document.getElementById('qid').value;
    var query=document.getElementById('query').value;
    
    var newEntry = new Object();

    newEntry.qid=qid;
    newEntry.query=query;

    alert(newEntry);

    
}
