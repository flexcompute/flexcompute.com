# clearing the last build
rm -rf _site
# build
JEKYLL_ENV=production bundle exec jekyll build --config _config_production.yml
# Move the build to the www directory
cp -R _site /opt/homebrew/var/www/
brew services restart nginx
echo "Server address: http://127.0.0.1:8082/"
