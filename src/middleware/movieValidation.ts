import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
        .isString()
        .withMessage("O titulo eh obrigatorio!")
        .isLength({ min: 5 })
        .withMessage("O titulo precisa ter no minimo 5 caracteres."),
        
        body("rating")
        .isNumeric()
        .withMessage("A nota precisa ser um numero.")
        .custom((value: number) => {
            if(value < 0 || value > 10) {
                throw new Error("A nota precisa ser entre 0 e 10");
            }
            return true;
        }),

        body("description")
        .isString()
        .withMessage("A descricao eh obrigatoria!"),

        body("director")
        .isString()
        .withMessage("O nome do diretor eh obrigatorio!"),

        body("poster")
        .isURL()
        .withMessage("A imagem necessita ser uma URL.")

    ]
}