import {Request, Response} from "express";

import { MovieModel } from "../models/Movie";

import Logger from "../../config/logger";


export async function createMovie(req: Request, resp: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return resp.status(201).json(movie);
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`);
        return resp.status(500).json({error: "Por favor, tente mais tarde!"})
    }
}

export async function findMovieById(req: Request, resp: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return resp.status(404).json({error: "Nao existe!"});
        }

        return resp.status(200).json(movie);
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`);
        return resp.status(500).json({error: "Por favor, tente mais tarde!"})
    }
}

export async function getAllMovies(req: Request, resp: Response) {
    try {
        const movies = await MovieModel.find();

        return resp.status(200).json(movies);
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`);
        return resp.status(500).json({error: "Por favor, tente mais tarde!"})
    }
}

export async function removeMovie(req: Request, resp: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return resp.status(400).json({error: "O filme nao existe!"});
        }

        await movie.deleteOne();

        return resp.status(200).json({ msg: "Filme removido com sucesso!"})
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return resp.status(500).json({error: "Por favor, tente mais tarde!"})
    }
}

export async function updateMovie(req: Request, resp: Response) {
    try {
        const id = req.params.id;
        const data = req.body;

        const movie = await MovieModel.findById(id);

        if(!movie) {
            return resp.status(400).json({error: "O filme nao existe!"});
        }

        await MovieModel.updateOne({ _id: id }, data);

        return resp.status(200).json(data)
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return resp.status(500).json({error: "Por favor, tente mais tarde!"})
    }
}