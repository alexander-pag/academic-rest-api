/** Dto */
const student_groupDto = require("../../model/dto/student_group.dto");
const config = require("config");

exports.createStudent_group = (req, res, next) => {
    let student_group = {
        student_id: req.body.student_id,
        group_id: req.body.group_id
    };
    student_groupDto.create(student_group, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.updateStudent_group = (req, res, next) => {
    let student_group = {
        student_id: req.body.student_id,
        group_id: req.body.group_id
    };
    student_groupDto.update({ _id: req.body.id }, student_group, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {

    student_groupDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.deleteStudent_group = (req, res, next) => {
    student_groupDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}