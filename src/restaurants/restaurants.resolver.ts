import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  @Query(() => Restaurant)
  isPizzaGood() {
    return true;
  }
}
