const js_string = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`

const list_node = JSON.parse(js_string);
const student_nodes = list_node.list

const result = {}
result.list = student_nodes

console.log(result)