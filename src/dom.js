window.dom = {
    create(string) {
        const container = document.createElement("template"); // template can be the conatainer of any tag
        
        container.innerHTML = string.trim();
        return container.content.firstChild
    },

    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },

    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },

    append(parent, node) {  
        parent.appendChild(node)
    },

    wrap(node, parent) {
        dom.before(node.parent)
        dom.append(parent, node)
    },

    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },

    empty(node) {
        const {childNodes} = node
        const array = []
        let x = node.firstChild
        while(x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
    },

    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },

    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value
        }
        else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                node.style[name] = value
            } else if (typeof name === 'object') {
                // dom.style(div, {color: red})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    
    each(nodeList, fn){
        for(let i=0;i<nodeList.length;i++){
          fn.call(null, nodeList[i])
        }
    },
};


