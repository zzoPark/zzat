import socket from '~/plugins/socket.io'
import createSocketPlugin from '~/plugins/socket.store'

export const plugins = [createSocketPlugin(socket)]
