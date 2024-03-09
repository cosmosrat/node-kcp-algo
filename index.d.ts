// export * from './build/Release/kcp';

declare interface ISocket {
    once(evt: 'disconnect', listener: () => void): void;
    once(evt: 'error', listener: () => void): void;
    on(evt: 'disconnect', listener: (reason: string) => void): void;
    on(evt: 'error', listener: (reason: string) => void): void;
    on(evt: 'message', listener: (msg: any) => void): void;
    send(msg: any): void;
    sendRaw(msg: any): void;
    disconnect(): void;
    sendBatch(msgs: any[]): void;

    emit(evt: 'heartbeat'): void;
    emit(evt: 'message' , pkg: any): void;
    emit(evt: 'closing' , reason: string): void;
    emit(evt: 'handshake' , pkg: any): void;

    state: number;

    id ?: number;

    handshakeResponse ?: (response: any) => void;
    sendForce ?: (response: any) => void;

    remoteAddress ?: {ip: string , port ?: number};
}

export class KCP {
    constructor(conv: number, user: any) 
    wndsize(sndwnd: number, rcvwnd: number): void;
    setmtu(mtu: number): void;
    nodelay(nodelay: number, interval: number, resend: number, nc: number): void;
    release(): void;
    context(): ISocket;
    recv(): Buffer;
    input(pkg: Buffer): void;
    send(pkg: Buffer): void;
    output(func: (data: any, size: number, opts: any) => void): void;
    update(ts: number): void;
    check(ts: number): number;
    flush(): void;
    peeksize(): number;
    waitsnd(): number;
    stream(s: number): number;
}