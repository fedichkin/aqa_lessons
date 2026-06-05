import { ColdBrew } from '../abstract/cold-brew';

export class ColdBrewCoffee extends ColdBrew {
    public constructor(private readonly serveOnIce = true) {
        super(
            serveOnIce ? 'Cold Brew on Ice' : 'Cold Brew Concentrate',
            serveOnIce ? 95 : 110,
            serveOnIce ? 20 : 35,
            ['coarse ground coffee', 'cold filtered water'],
            18
        );
    }

    public brew(): string {
        const serving = this.serveOnIce ? 'straining over ice' : 'straining into concentrate';

        return `Steeping coarse grounds in cold water for 18h, filtering twice, ${serving}`;
    }
}
