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
    float a=atan(pos.y,pos.x)/(3.14*2.)+.5;
    
    gl_FragColor=vec4(vec3(a),1.);
}