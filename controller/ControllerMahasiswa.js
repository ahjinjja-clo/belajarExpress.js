import express from 'express';
import db from '../Connection.js';

export const getMahasiswa = (req, res) =>{
    const sql = 'SELECT * FROM MAHASISWA';
    db.query(sql, (error, result)=>
    res.json(result));
};

export const getMahasiswaByNim = (res, req) =>{
    const nim = req.query.NIM;
    const sql = `SELECT * FROM MAHASISWA WHERE NIM = ${nim}`;
    db.query(sql, (error, result) =>{
        res.json(result);
    });
};

export const createMahasiswa = (req, res) =>{
    const {NIM, Nama, Jurusan, alamat} = req.body;
    const sql = 'INSERT INTO MAHASISWA (NIM, Nama, Jurusan, alamat) VALUES (?, ?, ?, ?)';
    db.query(sql, [NIM, Nama, Jurusan, alamat], (error, result) =>{
        if(error){
            res.status(404)
            res.send(error)
        };
        res.json(result);
    });
};

export const updateMahasiswa = (req, res) =>{
    const NIM = req.query.NIM;
    const {Nama, Jurusan, alamat} = req.body;
    if(NIM || Nama || Jurusan || alamat){
        const query = `UPDATE MAHASISWA SET Nama = "${Nama}", Jurusan = "${Jurusan}", alamat = "${alamat}" WHERE NIM = ${NIM}`;
        db.query(query, (error, result) =>{
            if(error) res.status(400).send(error.message);
            res.json(result);
        });
    } else{
        res.send("isi sendiri");
    };
};

export const deleteMahasiswa = (req, res) =>{
    const nim = req.query.nim;
    const sql = 'DELETE FROM MAHASISWA WHERE NIM = ?';
    db.query(sql, [nim], (error, result) =>{
        if(error){
            res.status(404)
            res.send(error)
        };
        res.status(200);
        res.json('Data berhasil dihapus');
    }); 
}