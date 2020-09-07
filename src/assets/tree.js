function treeB() {
  this.root = null;
}

treeB.prototype.create = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

treeB.prototype.add = function(value) {
  var currentNode = this.create(value);
  if (!this.root) {
    this.root = currentNode;
  } else {
    this.insert(currentNode);
  }
  return this;
};

treeB.prototype.insert = function(currentNode) {
  var value = currentNode.value;
  var traverse = function(node) {
    if (value === node.value) {
      return;
    } else if (value > node.value) {
      if (!node.right) {
        node.right = currentNode;
        return;
      } else
        traverse(node.right);
    } else if (value < node.value) {
      if (!node.left) {
        node.left = currentNode;
        return;
      } else
        traverse(node.left);
    }
  };
  traverse(this.root);
};

treeB.prototype.contains = function(value) {
  var node = this.root;
  var traverse = function(node) {
    if (!node) return false;
    if (value === node.value) {
      return true;
    } else if (value > node.value) {
      return traverse(node.right);
    } else if (value < node.value) {
      return traverse(node.left);
    }
  };
  return traverse(node);
};

treeB.prototype.breadthFirstLTR = function() {
  var node = this.root;
  var queue = [node];
  var result = [];
  while (node = queue.shift()) {
    result.push(node.value);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return result;
};

treeB.prototype.breadthFirstRTL = function() {
  var node = this.root;
  var queue = [node];
  var result = [];
  while (node = queue.shift()) {
    result.push(node.value);
    node.right && queue.push(node.right);
    node.left && queue.push(node.left);
  }
  return result;
};

treeB.prototype.preOrder = function() {
  var result = [];
  var node = this.root;
  var traverse = function(node) {
    result.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(node);
  return result;
};

treeB.prototype.inOrder = function() {
  var result = [];
  var node = this.root;
  var traverse = function(node) {
    node.left && traverse(node.left);
    result.push(node.value);
    node.right && traverse(node.right);
  };
  traverse(node);
  return result;
};

treeB.prototype.postOrder = function() {
  var result = [];
  var node = this.root;
  var traverse = function(node) {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    result.push(node.value);
  };
  traverse(node);
  return result;
};

treeB.prototype.findMin = function() {
  var node = this.root;
  var traverse = function(node) {
    return !node.left ? node.value : traverse(node.left);
  };
  return traverse(node);
};

treeB.prototype.findMax = function() {
  var node = this.root;
  var traverse = function(node) {
    return !node.right ? node.value : traverse(node.right);
  };
  return traverse(node);
};

treeB.prototype.getDepth = function() {
  var node = this.root;
  var maxDepth = 0;
  var traverse = function(node, depth) {
    if (!node) return null;
    if (node) {
      maxDepth = depth > maxDepth ? depth : maxDepth;
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };
  traverse(node, 0);
  return maxDepth;
};
