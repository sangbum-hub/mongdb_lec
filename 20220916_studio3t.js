db.createCollection('school')


db.school.insert({name:'john', age:21})

db.school.find()

db.inventory.insert({_id:1,
                    name:'eraser',
                    make:'camlin',
                    stock:2500})

db.inventory.insert([
                        {_id:2,
                        name:'CD',
                        make:'moserbaar',
                        stock:500},
                        {_id:3,
                        name:'pendrive',
                        make:'sandisk',
                        capacity:32,
                        stock:200
                        }
                    ])

db.inventory.find()


items = [
            {_id:4,
            name:'pencil',
            type:'HB',
            size:8,
            stock:1200},
            {_id:4,
            name:'maker',
            type:'permanent',
            tip:'fine',
            color:'black',
            stock:200}
        ]
                    
                    
db.inventory.insert(items)

db.inventory.find()

item1 = {_id:6,
        name:'paper',
        size:'A4',
        pktsize:500,
        stock:100
        }

item2 = {_id:7,
        name:'cards',
        type:'visiting',
        pktsize:100,
        stock:500        
        }

item3 = {_id:8,
        name:'rulers',
        type:'metal',
        unit:'inches',
        stock:750        
        }

db.inventory.insert([item1, item2, item3])

db.inventory.find()

db.inventory.insertOne({_id:9,
                        name:'compass',
                        type:'magnetic',
                        stock:50})

db.inventory.find()

db.inventory.insertMany([
                            {_id:10,
                            name:'strapler',
                            make:'kangaroo',
                            size:'A10',
                            stock:100},
                            {_id:11,
                            name:'stamp',
                            denoination:25,
                            stock:200},
                            {_id:12,
                            name:'box',
                            size:'L',
                            stock:250
                            }
                        ])

db.inventory.find()








