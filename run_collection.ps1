# start-stacks.ps1
$stacks = @(
  @{ Name = 'proj1'; Port = '8001'; NginxPort = '80' },
  @{ Name = 'proj2'; Port = '8002'; NginxPort = '81' }
)

foreach ($s in $stacks) {
  Write-Host "Starting $($s.Name) on host port $($s.Port)..."
  $env:API_PORT = $s.Port
  $env:API_HOST = "$($s.Name)-api-1"
  $env:NGINX_PORT = $s.NginxPort
  docker compose -p $($s.Name) -f docker-compose-multi.yml up -d
  # clear the env var to avoid leaking:
  Remove-Item Env:API_PORT -ErrorAction SilentlyContinue
}
