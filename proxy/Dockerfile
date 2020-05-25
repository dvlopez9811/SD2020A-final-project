FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

RUN apk add --update \
    curl \
    && rm -rf /var/cache/apk/*

COPY proxy.conf /etc/nginx/conf.d

HEALTHCHECK --interval=30s --timeout=30s --start-period=1s --retries=5 \
    CMD curl -f http://localhost:8080/ || exit 1
