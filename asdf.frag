#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st=gl_FragCoord.xy/min(u_resolution.x,u_resolution.y);
    
    vec2 pos=vec2(.5)-st;
    float r=length(pos)*2.;
    float a=atan(pos.y,pos.x);
    
    float f=abs(cos(a*3.));
    f=abs(cos(a*2.5))*.5+.3;
    f=abs(cos(a*12.)*sin(a*3.))*.8+.1;
    f=smoothstep(-.7,.7,cos(a*10.))*.2+.5;
    
    vec3 color=vec3(1.-smoothstep(f-.005,f+.005,r));
    gl_FragColor=vec4(color,1.);
}