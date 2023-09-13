"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaValidation(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (detail) { return detail.message; });
            return res.status(422).send(errors);
        }
        ;
        next();
    };
}
;
exports.default = schemaValidation;
