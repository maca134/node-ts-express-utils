# TS Express Utils

A set of functions for using classes in typescript as controllers for express.js

`npm install --save @maca134/ts-express-utils`

```typescript
@controller('/auth')
export default class AuthController extends BaseController {

    @get('/login', PassportMiddleware)
	async getLogin(req: Request, res: Response) {
        //...
    }

	@get('/user')
	getUser(req: Request, res: Response) {
        //...
	}

    @post('/logs')
	async postLogs(req: Request, res: Response) {
        new Http401Unauthorized();
    }
}

export class PassportMiddleware extends MiddlewareBase {
	protected readonly _requestHandler: RequestHandler = (req, res, next) => {
		req.session['redirect_url'] = req.query['redirect'] || '/';
		return Passport.authenticate('steam')(req, res, next);
	};
}

const app = express();

const router = await loadController([new AuthController()]);
app.use(router);

```
