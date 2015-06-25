#
# You’ll need to edit these
#
set :application, "UKTI" # The project name, with Capitals and no spaces, e.g. BrowserLondon


#
# You may need to edit these
#
set :deploy_to,   "/var/application/#{application}"
set :repository,  "git@github.com:browserlondon/#{application}.git"

#
# You shouldn’t need to edit below here
#
set :app_path,     "app"
set :scm,          :git

set :deploy_via,   :remote_cache

# Vendors
set :use_composer,   false
set :update_vendors, false

# Multistage for
set :stages,        %w(staging)
set :default_stage, "staging"
set :stage_dir,     app_path + "/config/deploy"
require "capistrano/ext/multistage"

# Clean releases
set :keep_releases, 2
after "deploy", "deploy:cleanup"

# Be more verbose by uncommenting the following line
#logger.level = Logger::MAX_LEVEL


# SSH and sudo
set :user,     "ubuntu"
ssh_options[:forward_agent] = true
set :use_sudo, false

# Permissions
set :writable_dirs,       []
set :webserver_user,      "www-data"
set :use_set_permissions, true # See custom permissions task below