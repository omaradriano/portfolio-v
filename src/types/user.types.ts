export type User = {
    status: Status,
    auth: Auth,
    data?: {}
}

type Status = 'online' | 'offline'
type Auth = true | false