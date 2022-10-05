import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import {CreateMensajeDto} from './dto/create-mensaje-dto'
import { Mensaje } from './entities/mensaje.entity'

@Injectable()
export class MensajesService {

  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeReporitory: Repository<Mensaje>
  ) {}

  async getAll(): Promise<Mensaje[]> {
    return await this.mensajeReporitory.find()
  }

  async getById(idMensaje: number): Promise<Mensaje> {
    return await this.mensajeReporitory.findOneById(idMensaje)
  } 

  async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje> {
    const mensaje = new Mensaje()
    mensaje.mensaje = mensajeNuevo.mensaje
    mensaje.nick = mensajeNuevo.nick
    return this.mensajeReporitory.save(mensaje)
  }

  async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje> {
    const mensaje = await this.mensajeReporitory.findOneById(idMensaje)
    mensaje.nick = mensajeActualizar.nick
    mensaje.mensaje = mensajeActualizar.mensaje
    return await this.mensajeReporitory.save(mensaje)
  }

  async deleteMensaje(idMensaje: number): Promise<any> {
    return await this.mensajeReporitory.delete(idMensaje)
  }
}
