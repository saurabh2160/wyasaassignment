
solution for leet code problem 98
https://leetcode.com/problems/validate-binary-search-tree/
```var isValidBST = function(root) {
    
    function traverse(root,min,max){
        //base case
        if(root===null) return true
        
        //checking valid root value every time
        if(root.val>=max || root.val<=min)
            return false
        
        //recursively calling each side
        return traverse(root.left,min,root.val) && traverse(root.right,root.val,max);
    }
    return traverse(root,-Infinity,Infinity)
};```
