FROM node:18-alpine

# Crear usuario que sea no-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app


COPY package*.json ./

RUN npm ci --omit=dev

# Copiando el codigo de la app
COPY . .

# Aqui ajuste permisos y usar usuario no-root
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000
CMD ["npm", "start"]
