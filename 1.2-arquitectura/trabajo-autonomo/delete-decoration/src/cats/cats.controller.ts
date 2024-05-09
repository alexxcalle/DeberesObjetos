import {
  Controller,
  Get,
  Post,
  HttpCode,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateCatsDto, UpdateCatDTO } from './dto/cats.dto.controller';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(418)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  async create(@Body() CreateCatsDto: CreateCatsDto) {
    CreateCatsDto;
    return 'This action adds a new cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDTO: UpdateCatDTO): string {
    updateCatDTO;
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): string {
    return `This action removes cat #${id}`;
  }
}
