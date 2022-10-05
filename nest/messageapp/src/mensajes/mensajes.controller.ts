import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common'
import { CreateMensajeDto } from './dto/create-mensaje-dto'
import {MensajesService} from './mensajes.service'

@Controller('mensajes')
export class MensajesController {

  constructor(private mensajesServices: MensajesService) {  }
  
  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    this.mensajesServices.createMensaje(createMensajeDto)
    .then( mensaje => {
      response.status(HttpStatus.CREATED).json(mensaje)
    }).catch( error => {
      console.error(error)
      response.status(HttpStatus.BAD_REQUEST).json({mensaje: 'Error en la creación del mensaje'})
    })
  }
  
  @Get(':id')
  getById(@Res() response, @Param('id') idMensaje) {
    this.mensajesServices.getById(idMensaje)
    .then( mensaje => { 
      if(!mensaje) response.status(HttpStatus.NOT_FOUND).json({mensaje: `ID ${idMensaje} not found`})
      else response.status(HttpStatus.OK).json(mensaje)
    }).catch(error => {
      console.error(error)
      response.status(HttpStatus.BAD_REQUEST).json({mensaje: 'Error en la obtención del mensaje'})
    })
  }

  @Get()
  getAll(@Res() response) {
    this.mensajesServices.getAll()
    .then( mensajeList => {
      response.status(HttpStatus.OK).json(mensajeList)
    }).catch(error => {
      console.error(error)
      response.status(HttpStatus.BAD_REQUEST).json({mensaje: 'Error en la obtención del mensaje'})
    })
  }

  @Put(':id')
  update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje) {
    this.mensajesServices.updateMensaje(idMensaje, updateMensajeDto)
    .then(mensaje => {
      response.status(HttpStatus.OK).json(mensaje)
    }).catch(error => {
      console.error(error)
      response.status(HttpStatus.BAD_REQUEST).json({mensaje: 'Error en la edición del mensaje'})
    })
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.mensajesServices.deleteMensaje(idMensaje)
    .then(mensaje => {
      response.status(HttpStatus.OK).json(mensaje)
    }).catch(error => {
      console.error(error)
      response.status(HttpStatus.BAD_REQUEST).json({mensaje: 'Error en la eliminación del mensaje'})
    })
    
  }
}
