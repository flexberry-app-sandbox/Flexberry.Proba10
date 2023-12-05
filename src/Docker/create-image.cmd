docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba_10/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proba_10/app ../..
