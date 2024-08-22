import express, { Router } from 'express';
import db from './Connection.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
import router from './routes/Route.js';
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", router);
app.listen(PORT, () =>{
    console.log("server running on port " + PORT );
});

// app.get("/", (req, res) =>{
    //     const sql = 'SELECT * FROM MAHASISWA';
    //     db.query(sql, (error, result)=>
        //     res.json(result));
// });

// app.get("/find", (req, res)=>{
//     const sql = `SELECT * FROM MAHASISWA WHERE NIM = ${req.query.NIM}`; //nim di ${req.query.NIM} harus sama seperti di db
//     db.query(sql, (error, result) =>{
//         res.json(result); 
//     });
// });

// app.post("/create", (req, res) =>{
//     const {NIM, Nama, Jurusan, alamat} = req.body;
//     const sql = 'INSERT INTO MAHASISWA (NIM, Nama, Jurusan, alamat) VALUES (?, ?, ?, ?)';
//     db.query(sql, [NIM, Nama, Jurusan, alamat], (error, result) =>{
//         if(error){
//             res.status(404)
//             res.send(error)
//         };
//         res.json(result);
//     });
// });

// app.delete("/delete", (req, res) =>{
//     const nim = req.query.nim;
//     const sql = 'DELETE FROM MAHASISWA WHERE NIM = ?';
//     db.query(sql, [nim], (error, result) =>{
//         if(error){
//             res.status(404)
//             res.send(error)
//         };
//         res.status(200);
//         res.json('Data berhasil dihapus');
//     }); 
// });

// app.put("/update", (req, res) =>{
//     const NIM = req.query.NIM;
//     const {Nama, Jurusan, alamat} = req.body;
//     if(NIM || Nama || Jurusan || alamat){
//         const query = `UPDATE MAHASISWA SET Nama = "${Nama}", Jurusan = "${Jurusan}", alamat = "${alamat}" WHERE NIM = ${NIM}`;
//         db.query(query, (error, result) =>{
//             if(error) res.status(400).send(error.message);
//             res.json(result);
//         });
//     } else{
//         res.send("isi sendiri");
//     };
// });

