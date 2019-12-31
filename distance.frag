// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

#define M_PI 3.1415926535897932384626433832795

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 spin(vec2 pos,float t,float fac){
    return pos+vec2(sin(t),cos(t))*fac;
}

void main(){
    vec2 st=gl_FragCoord.xy/min(u_resolution.x,u_resolution.y);
    float t=u_time*5.;
    
    float pct=distance(vec2(.5),st);
    // siren
    // pct = distance(st,spin(vec2(0.5), t, 0.2)) - distance(st,spin(vec2(0.5), t, -0.1));
    
    //pct = distance(st,vec2(0.4)) * distance(st,vec2(0.6));
    //pct =  min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
    //pct = max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
    //pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
    
    vec3 color=vec3(pct*2.);
    gl_FragColor=vec4(color,1.);
}
