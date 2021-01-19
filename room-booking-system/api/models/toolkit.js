exports.delete_column = function(obj,disable_fields){
    obj = Object.assign({}, obj)["_doc"]
    disable_fields.forEach(field=>{
      delete obj[field]
    })
}

