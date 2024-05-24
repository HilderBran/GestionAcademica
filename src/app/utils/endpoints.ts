import { environment } from "../../environments/environment.development";

export const endpoints = {
    // *** ESTUDIANTE ***
    agregarEstudiante: 
    environment.serverURL.concat('api/estudiantes/agregarEstudiante'),
    actualizarEstudiante:
    environment.serverURL.concat('api/estudiantes/actualizarEstudiante/{idEstudiante}'),
    eliminarEstudiante:
    environment.serverURL.concat('api/estudiantes/eliminarEstudiante/{idEstudiante}'),
    obtenerEstudiantesPorId:
    environment.serverURL.concat('api/estudiantes/obtenerEstudiantesPorId/{idEstudiante}'),
    obtenerEstudiantes:
    environment.serverURL.concat('api/estudiantes/obtenerEstudiantes'),

    // ***************************
};