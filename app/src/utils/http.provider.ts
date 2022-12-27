import { HttpService } from '@nestjs/axios';

export const HttpProvider = [
  {
    provide: 'HTTP_PROVIDER',
    useFactory: (httpService: HttpService) => {
      return httpService;
    },
    inject: [HttpService],
  },
];
