import { type Request, type Response } from 'express';

export class HealthController {
  public async run(req: Request, res: Response): Promise<void> {
    res.status(204).send();
  }
}
