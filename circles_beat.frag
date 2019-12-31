// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

#define M_PI 3.1415926535897932384626433832795

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st=gl_FragCoord.xy/min(u_resolution.x,u_resolution.y);
    float pct=0.;
    
    pct=distance(st,vec2(.5))*2.;
    
    float r=.5+max(0.,sin(mod(u_time*5.,M_PI*2.)))*.1;
    vec3 color=vec3(pct);
    color=vec3(1.-step(r,pct))*vec3(.3098,1.,1.);
    
    gl_FragColor=vec4(color,1.);
}
