// // 1. sequelize model:generate --name _ --attributes _:string,_:integer

// sequelize model:generate --name "Ruang" --attributes Nama:string,Jml_Kapasitas:integer,isActive:boolean
// sequelize model:generate --name Fasilitas --attributes Nama:string,isActive:boolean
// sequelize model:generate --name Fasilitas_Ruang --attributes IDRuang:integer,IDfasilitas:integer,isActive:boolean
// sequelize model:generate --name Booking --attributes IDRuang:integer,Date:Date,TimeStart:Date,TimeEnd:Date,isActive:boolean