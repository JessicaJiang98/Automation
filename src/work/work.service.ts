import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WorkService {
  constructor(private readonly httpService: HttpService) {}

  async getVenderToken(): Promise<string> {
    const token = (
      await lastValueFrom(
        this.httpService.post(
          `https://www.personalized-nutrients.com/api/Token`,
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'Bfte3ZdEPo9y2D1zF6td5moaHgvrv6/98UTZteSlPpU=',
            client_secret: 'fQpl5Cu1DUx7lJEmfLnjHfwiXr9MDt+tqtv4Q0IcFrU=',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
      )
    ).data;
    return token.access_token;
  }

  async getOrderByOrderIdsProd(orderIds: number[]) {
    //20240816
    const token = await this.getVenderToken();
    const quoteUrl = `https://www.personalized-nutrients.com/api/orders?orderIds=${orderIds.join(',')}`;
    const postResponse = await lastValueFrom(
      this.httpService.get(quoteUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );
    return postResponse.data;
  }
}
