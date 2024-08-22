import express from "express";
module.exports = sequlize.define('mahasiswa', {
    NIM:{type: DataType.INTERGER, 
        autoIncrement: true, 
        PrimaryKey: true
    }, 
    nama:{ type:DataType.STRING}, 
    Jurusan:{ type: DataType.STRING}
})